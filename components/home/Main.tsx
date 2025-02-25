import Link from "next/link";

export default function Main(){
    return <main>
        <div>
        <Link href="/myList/myTestList">myList</Link><br/>
        <Link href="/test">test</Link><br/>
        <Link href="/jianli">jianli</Link><br/>
        <Link href="/admin/login">login</Link><br/>
        </div>
    </main>
}