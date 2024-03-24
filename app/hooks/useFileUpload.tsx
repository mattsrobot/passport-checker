import { useFetcher } from "@remix-run/react";

function useFileUpload() {
    let { submit, state } = useFetcher();
    let isUploading = state !== "idle";

    return {
        submit(files: FileList | null) {
            if (!files) return;
            let formData = new FormData();
            for (let file of files) formData.append("file", file);
            submit(formData, { method: "POST", encType: "multipart/form-data" });
        },
        isUploading,
    };
}

export default useFileUpload;
