import Link from 'next/link';
import { Button } from '../styles/GlobalComponentsStyles'


export default function Custom404() {
  return (
    <>
      <h1>It&apos;s 404 baby😏</h1>
      <iframe
        src="https://giphy.com/embed/5nmobhwPiNsKELWk69"
        width="480"
        height="362"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/" passHref>
        <Button>Go home</Button>
      </Link>
    </>
  );
}
