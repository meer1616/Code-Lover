import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { kontest } from "../types/kontest"

export const getKontestData = createAsyncThunk('data/getKontest', async (text: string) => {
    return await fetch(`https://kontests.net/api/v1/${text}`).then((res) => {
        return res.json()

    })

})


interface OrganizationType {
    status: 'LOADING' | 'SUCCESS' | 'FAILED'
    data: kontest[]
}

const initialState: OrganizationType = {
    status: "LOADING",
    data: [{
        name: "",
        duration: "",
        end_time: "",
        url: "",
        in_24_hours: "",
        site: "",
        start_time: "",
        status: ""
    }]
}

const KontestSlice = createSlice({
    name: "kontestSlice",
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(getKontestData.pending, (state) => {
    //         state.status = 'LOADING'
    //     })
    //     builder.addCase(getKontestData.fulfilled, (state, action) => {
    //         state.status = 'SUCCESS'
    //         state.data = action.payload
    //     })
    //     builder.addCase(getKontestData.rejected, (state) => {
    //         state.status = 'FAILED'
    //         state.data = {
    //             name: "",
    //             duration: "",
    //             end_time: "",
    //             url: "",
    //             in_24_hours: "",
    //             site: "",
    //             start_time: "",
    //             status: ""
    //         }
    //     })
    extraReducers: (builder) => {
        builder.addCase(getKontestData.pending, (state, { payload }) => {
            state.status = "LOADING"
        }), builder.addCase(getKontestData.fulfilled, (state, action: any) => {
            state.status = 'SUCCESS'
            state.data = action.payload
        }),
            builder.addCase(getKontestData.rejected, (state) => {
                state.status = 'FAILED'
                state.data = [{
                    name: "",
                    duration: "",
                    end_time: "",
                    url: "",
                    in_24_hours: "",
                    site: "",
                    start_time: "",
                    status: ""
                }]
            })
    }
})

export default KontestSlice.reducer