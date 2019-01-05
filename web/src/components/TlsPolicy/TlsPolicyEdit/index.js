import React, { useState } from "react";
// import {  } from "./TlsPolicyEdit.module.scss";

import Box from "components/util/Box";
import Button from "components/util/Button";
import Toggle from "components/util/Toggle";
import { FormField } from "components/util/Form";
import InputRange from "components/util/InputRange";

import { formatDataUnit } from "lib/formatDataUnit";

export default function TlsPolicyEdit({ setShowEditTlsPolicy }) {
  const [range, setRange] = useState(0);

  return (
    <Box onClose={() => setShowEditTlsPolicy(false)}>
      <form action="">
        <FormField>
          <label htmlFor="">Domain</label>
          <input type="text" />
        </FormField>
        <FormField>
          <label htmlFor="">Policy</label>
          <select>
            <option value="dane">dane</option>
            <option value="dane-only">dane-only</option>
            <option value="fingerprint">fingerprint</option>
            <option value="verify">verify</option>
            <option value="secure">secure</option>
          </select>
        </FormField>
        <FormField>
          <label htmlFor="">Params</label>
          <input type="text" />
        </FormField>

        <Button secondary>Create</Button>
      </form>
    </Box>
  );
}
