
interface NoApiResponse{
    reason: string;
}

export async function  getNoReason(): Promise<string> {
    
    try{
        const response: Response = await fetch('/api/no');
        const data: NoApiResponse = await response.json();

        return data.reason;
    }catch(error){
        console.error('Error fetching data from proxy: ',error);
        const fallbacks: string[] = [
            'The API is having trust issues',
            'Even the internet is saying no to this request',
            'CORS blocked us harder than a nightclub bouncer',
            'The API went out for coffee and never came back',
            'Error 404: Motivation not found'
        ];
        const randonResponse: string = fallbacks[Math.floor(Math.random()*fallbacks.length)];
        return randonResponse;
    }
}


