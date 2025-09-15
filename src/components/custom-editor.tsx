"use client";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import { useState } from "react";
import { Box } from "@chakra-ui/react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Heading } from "@ckeditor/ckeditor5-heading";
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

function CustomEditor({ initialData, onChange }: EditorType) {
  return (
    <>
      <CKEditor
        onError={(e) => console.log(e)}
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

export default CustomEditor;
