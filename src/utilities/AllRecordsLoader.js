// This loader function collects all records from the backend
export async function loader() {
  // const response = await fetch("http://localhost:5050/record/");
  const response = await fetch(
    "https://of-server-faa8e3a59e51.herokuapp.com:10754/record/"
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "From RecordList: Could not fetch data." }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
