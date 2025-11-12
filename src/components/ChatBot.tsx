// 'use client';

// import { useState } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';
// import { getNoReason } from '@/lib/api';

// export default function Chatbot() {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');

//    const handleSend = async () =>{
//         const data = await getNoReason();
//         setResponse(data.reason);
//     };
//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h5" gutterBottom>
//         No Chatbot
//       </Typography>

//       <TextField
//         label="Your question"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         fullWidth
//         sx={{ mb: 2 }}
//       />

//       <Button variant="contained" onClick={handleSend}>
//         Send
//       </Button>

//       {response && (
//         <Typography variant="body1" sx={{ mt: 2 }}>
//           {response}
//         </Typography>
//       )}
//     </Box>
//   );
// }

'use client';

import { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Stack } from '@mui/material';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      // ✅ Fetch from your Express proxy (no CORS issue)
      const res = await fetch('http://localhost:5000/no');

      // Check if response is okay before parsing
      if (!res.ok) throw new Error('Failed to fetch from proxy');

      const data = await res.json();
      setResponse(data.reason || 'No reason provided 😅');
    } catch (error) {
      console.error('Error fetching from proxy:', error);
      setResponse('⚠️ Something went wrong fetching a "no".');
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'background.default',
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: 500,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          🙅‍♂️ No Chatbot
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Say something..."
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Send'}
          </Button>

          {response && (
            <Paper
              elevation={1}
              sx={{
                p: 2,
                mt: 2,
                bgcolor: 'grey.100',
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">{response}</Typography>
            </Paper>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
