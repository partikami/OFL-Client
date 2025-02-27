import { redirect } from "react-router";

// This action function is used in the Credit and Edit routes
export async function action({ request, params }) {
  const method = request.method;

  const data = await request.formData();

  const fieldData = {
    ofid: data.get("ofid"),
    fieldName: data.get("fieldName"),
    dataType: data.get("dataType"),
    description: data.get("description"),
    values: data.get("values"),
    level: data.get("level"),
    tags: data.get("tags"),
    example: data.get("example"),
    linkReference: data.get("linkReference"),
    introduced: data.get("introduced"),
    depricated: data.get("depricated"),
  };

  let url = "http://localhost:5050/record";

  if (method === "PATCH") {
    const id = params.id;
    url = "http://localhost:5050/record/" + id;
  }

  let response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fieldData),
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "FieldCreatePage says: Could not save event.",
      }),
      { status: 500 }
    );
  }

  return redirect("..");
}
