import { createHash } from "crypto";

function safeFileName(content: string) {
    const hex = createHash('sha3-256').update(content).digest('hex');
    const fileNameParts = content.split('.');
    if (fileNameParts.length > 1) {
        return `${hex}.${content.split('.').pop()}`
    } else {
        return hex;
    }
}

export default safeFileName;
