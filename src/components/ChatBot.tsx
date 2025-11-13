'use client';

import {Box, Button, TextField, Typography, Paper, Stack} from'@mui/material';
import { useState } from 'react';
import { getNoReason } from '@/lib/api';
import SendIcon from '@mui/icons-material/Send'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Chatbot(){
  const[input,setInput] = useState('');
  const[response,setResponse] = useState('');
  const[loading,setLoading] = useState(false);
  const handleSend = async () =>{
    if (!input.trim()) return;
    setLoading(true);
    setResponse('');
    try{
      const reason = await getNoReason();
      setResponse(response);
    }catch(error){
      console.error('API is fried');
      setResponse('The API gods have forsaken you!');
    }finally{
      setLoading(false);
      setInput('');
    }
  };
  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom align="center">
        Noracle
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Say something..."
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />

          <Button className='w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          onClick={handleSend} disabled={loading}>
            {loading ? <AccessTimeIcon/> : <SendIcon/>}
          </Button>

          {response && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              {response}
            </Typography>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}