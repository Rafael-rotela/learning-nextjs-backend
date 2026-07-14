
import { notFound } from "next/navigation";

export default async function Review({ params }: { params: Promise<{ reviewId: number; productId: number }> }) {

    const { reviewId, productId } = await params;
    if(reviewId > 1000){
        notFound()
    }
    
    return(
        <>
       
        <p>Produto {productId}</p>
        <p>Review {reviewId}</p>
        </>
    );
}