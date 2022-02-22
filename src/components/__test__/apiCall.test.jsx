import { render, screen } from "@testing-library/react"
import App from "../../App";
import FetchReq from "../../fetchReq/fetchReq";





test('api test', async()=> {
    const res = await FetchReq.fetchReqPost(1);
    expect(res.data).toBeDefined()
});

