import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div class="p-4 text-blue-500">Hello {props.params.name}</div>;
}
