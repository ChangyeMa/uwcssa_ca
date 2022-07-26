/*
 * @Author: 李佳修
 * @Date: 2022-06-03 15:54:51
 * @LastEditTime: 2022-07-24 17:10:18
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/DynamicForm/components/FieldLabel.tsx
 */

import { Box, Tooltip, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React from "react";

interface FieldLabelProp {
  name: string;
  description?: string;
  isRequired?: boolean;
}
function FieldLabel({ name, description, isRequired = false }: FieldLabelProp) {
  return (
    <Typography
      variant="subtitle2"
      sx={{
        marginBottom: 1,
        display: "flex",
        alignItems: "center",
      }}
      fontWeight={700}
    >
      {name}
      {isRequired ? (
        <span style={{ paddingLeft: "4px", color: "#e53935" }}>*</span>
      ) : null}
      {description ? (
        <Tooltip title={description} placement="top" arrow>
          <Box
            sx={{
              ml: "4px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <HelpOutlineIcon sx={{ fontSize: "16px" }} />
          </Box>
        </Tooltip>
      ) : null}
    </Typography>
  );
}

export default FieldLabel;
