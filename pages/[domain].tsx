import React from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

const Domain = () => {

    const router = useRouter()
    const { domain } = router.query

    // console.log("domain", domain);


    return (
        <div>domain</div>
    )
}

export default Domain

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context
    console.log(params);




    return {
        props: {
        }
    }

}