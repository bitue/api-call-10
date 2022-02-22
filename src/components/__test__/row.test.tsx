import { render, screen } from "@testing-library/react";
import {createMemoryHistory} from "history";
import { Router } from "react-router-dom";
import RowDetails from "../RowDetails";


test('row details', ()=> {
    const history = createMemoryHistory();
    history.push('/RowDetails', {title:'', url:'', created_at:'', author:''})
    render(<Router history={history}>
        <RowDetails></RowDetails>
    </Router>)
    const details = screen.getByTestId('row');
    expect(details).toBeInTheDocument()
})