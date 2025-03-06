import { useRouter } from "next/router";

function DetailPage(){
    const router = useRouter();
    const { slug } = router.query;
    return(
        <h1>Detail page <strong>{ slug }</strong></h1>
    )
}

export default DetailPage;