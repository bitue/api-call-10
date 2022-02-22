import { render, screen } from "@testing-library/react";
import App from "../../App";



test('apicall component in the document', ()=> {
    render(<App></App>)
    const apiTestCom = screen.getByRole('api-test');
    expect(apiTestCom).toBeInTheDocument()
})