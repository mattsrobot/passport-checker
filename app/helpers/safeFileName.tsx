import { randomUUID } from "crypto";

function safeFileName(content: string) {
    const hex = randomUUID();
    const fileNameParts = content.split('.');
    if (fileNameParts.length > 1) {
        return `${hex}.${content.split('.').pop()}`
    } else {
        return hex;
    }
}

export default safeFileName;
