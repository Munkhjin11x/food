import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    test

    </Stack>
    </main>
  );
}
