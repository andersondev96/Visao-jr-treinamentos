import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import { Container } from "../styles/components/BackPage";

export default function BackPage() {
  return (
    <Container>
      <Link href="/dashboard">
        <a>
          <BiArrowBack size={32} color="#FFF" />
        </a>
      </Link>
    </Container>
  );
}
