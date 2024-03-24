import { LoaderFunctionArgs, json } from "@remix-run/node";
import fs from "node:fs";
import { TextractClient, DetectDocumentTextCommand } from "@aws-sdk/client-textract";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";

export async function loader({ params }: LoaderFunctionArgs) {
    let dob = null, expiry = null, error = null;

    const credentials = fromNodeProviderChain();

    try {
        const filePath = `./uploads/${params.id}`;
        const exists = fs.existsSync(filePath);

        if (!exists) {
            error = "File is missing";
            return;
        }

        const config = { region: process.env.AWS_REGION, credentials: credentials };
        const client = new TextractClient(config);
        const buffer = fs.readFileSync(filePath, { encoding: null });

        const command = new DetectDocumentTextCommand({
            Document: {
                Bytes: buffer
            }
        });

        const response = await client.send(command);

        const blocks = response.Blocks ?? [];
        const blocksLength = blocks.length;

        for (var i = 0; i < blocksLength; i++) {
            const block = blocks[i];

            if (block.Text?.toLowerCase().includes("date of birth") && (i + 1) < blocksLength) {
                dob = blocks[i + 1].Text ?? "";
            }

            if (block.Text?.toLowerCase().includes("date of expiry") && (i + 1) < blocksLength) {
                expiry = blocks[i + 1].Text ?? "";
            }
        }

        if (dob?.length == 0 || expiry?.length == 0) {
            dob = null;
            expiry = null;
            error = "Passport image incorrect";
            return;
        }
    } catch (err) {
        console.error(err);

        error = "Unhandled error";
    } finally {
        return json({
            error: error,
            dob: dob,
            expiry: expiry,
        });
    }
}
