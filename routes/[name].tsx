import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div class="p-4">Hello {props.params.name}</div>;
}
