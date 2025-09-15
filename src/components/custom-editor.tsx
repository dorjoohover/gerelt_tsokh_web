"use client";;
import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const editorConfiguration = {
  toolbar: [
    // "heading",
    // "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "|",
    // "outdent",
    // "indent",
    // "|",
    "blockQuote",
    "undo",
    "redo",
    "|",
    "mediaEmbed",
  ],
};

type EditorType = {
  initialData?: string;
  onChange: (e: string) => void;
};

export default function CustomEditor({ initialData, onChange }: EditorType) {
  return (
    <>
      <CKEditor
        onError={(e: any) => console.log(e)}
        editor={ClassicEditor}
        config={editorConfiguration}
        data={initialData}
        onChange={(event: any, editor: any) => {
          onChange(editor.getData() as string);
        }}
      />
      {/* <Box
        dangerouslySetInnerHTML={{ __html: data?.replaceAll('"', "") ?? "" }}
      ></Box> */}
    </>
  );
}
