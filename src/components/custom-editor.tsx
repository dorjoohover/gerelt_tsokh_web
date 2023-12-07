"use client";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "blockQuote",

    "undo",
    "redo",
  ],
};

type EditorType = {
  initialData?: string;
  onChange: (e: string) => void;
};

function CustomEditor({ initialData, onChange }: EditorType) {
  return (
    <>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={initialData}
        onChange={(
          event: any,
          editor: { getData: () => React.SetStateAction<string | undefined> }
        ) => {
          onChange(editor.getData() as string);
        }}
      />
      {/* <Box
        dangerouslySetInnerHTML={{ __html: data?.replaceAll('"', "") ?? "" }}
      ></Box> */}
    </>
  );
}

export default CustomEditor;
