import { Box, Flex, Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { kontest } from '../types/kontest'
import { getKontestData } from '../redux/kontestSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'

const SingleData: React.FC<{ data: kontest[], text: string }> = ({ data, text }) => {
    const dispatch = useDispatch()
    const res = useSelector((state: RootState) => state.kontest)

    useEffect(() => {
        dispatch(getKontestData(text))
    }, [dispatch, text])

    console.log(res);

    if (res.status === "LOADING") {
        return <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    }
    if (res.status === "FAILED") {
        return <Box>Unable to get Data</Box>
    }


    return (
        <Box >

            <Flex flexWrap="wrap">{res.data.map((single: any, index: number) => {
                return <Box width="50%" key={index} style={{ border: "1px solid black" }} >
                    <h4>Name:{single.name}</h4>
                    <h4>Domain:{single.site}</h4>
                    <h4>Status:{single.status}</h4>
                    <h4>URL:<Link href={single.url}><a>{single.url} </a></Link>
                    </h4>
                    <h4>Start Time:{single.start_time}</h4>
                    <h4>End Time{single.end_time}</h4>
                    <h4>Duration{single.duration}</h4>
                    <h4>In 24 hours:{single.in_24_hours}</h4>
                </Box>

            })}</Flex>
        </Box>
    )
}

export default SingleData