import type {
  MetaFunction,
  NodeOnDiskFile,
  ActionFunctionArgs
} from "@remix-run/node";
import {
  json,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
  unstable_createFileUploadHandler,
  unstable_composeUploadHandlers,
  redirect,
} from "@remix-run/node";
import useFileUpload from "~/hooks/useFileUpload";
import safeFileName from "~/helpers/safeFileName";

export const meta: MetaFunction = () => {
  return [
    { title: "Borderless" },
    { name: "description", content: "Check your passport expiry date" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {

  let formData = await unstable_parseMultipartFormData(
    request,
    unstable_composeUploadHandlers(
      unstable_createFileUploadHandler({
        filter({ contentType }) {
          return contentType.includes("image");
        },
        directory: "./uploads",
        avoidFileConflicts: false,
        file({ filename }) {
          return safeFileName(filename);
        },
        maxPartSize: 20 * 1024 * 1024,
      }),
      unstable_createMemoryUploadHandler(),
    ),
  );

  let files = (formData.getAll("file") as NodeOnDiskFile[])
    .map((file) => file.name);

  if (files.length > 0) {
    throw redirect(`/passport/${files[0]}`)
  }

  return json({
    error: "Unable to upload passport",
  });
}

export default function Index() {
  const { submit, isUploading } = useFileUpload();

  return (
    <main>
      <h1>Upload a file</h1>
      <label>
        {isUploading ? <p>Uploading image...</p> : <p>Select an image</p>}
        <input
          disabled={isUploading}
          name="file"
          type="file"
          accept="image/*"
          onChange={(event) => submit(event.currentTarget.files)}
        />
      </label>
    </main>
  );
}
