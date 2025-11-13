export async function GET() {
    try {
        const response = await fetch("https://naas.isalman.dev/no");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        console.error("Error Fetching From NAAS: ", error);
        return Response.json(
            { error: "Failed to fetch from NAAS" },
            { status: 500 }
        );
    }
}