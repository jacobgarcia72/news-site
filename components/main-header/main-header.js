import Image from "next/image";
import Link from "next/link";
import logoImg from '@/assets/logo.jpg';

export default function MainHeader() {
    return (
        <header>
            <Link href="/">
                <Image src={logoImg} alt="Logo" width={50} height={50} priority />
            </Link>
            <Link href="/news">News</Link>
        </header>
    )
}
