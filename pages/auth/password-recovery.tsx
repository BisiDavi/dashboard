import { Container, CssBaseline } from "@material-ui/core";

import Passwordrecoveryform from "@components/Passwordrecoveryform";

export default function Passwordrecovery() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Passwordrecoveryform />
      </Container>
    </>
  );
}
