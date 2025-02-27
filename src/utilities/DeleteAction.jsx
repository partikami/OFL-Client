import { redirect } from "react-router";

export async function action({ params, request }) {
  const id = params.id;
  const response = await fetch("http://localhost:5050/record/" + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not delete record.",
      }),
      { status: 500 }
    );
  }
  return redirect("/list");
}
