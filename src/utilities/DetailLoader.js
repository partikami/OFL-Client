// This loader function returns one specific record
export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:5050/record/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch data.",
      }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
