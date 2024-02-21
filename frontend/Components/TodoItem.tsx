import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBBadge,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBTooltip,

} from "mdb-react-ui-kit";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons';




import axios from 'axios';

interface TodoInterface {
    id: number;
    name: string;
    isCompleted: boolean;
}

const ListTodos = () => {
    const [todos, setTodos] = useState<TodoInterface[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const { data } = await axios.get('http://localhost:5001/todos');
                console.log('Received data:', data);
                setTodos(data.todos);
            } catch (error) {
                console.error('Error fetching todos:', error);
                // Add user-friendly error handling here if needed
            }
        };

        fetchTodos();
    }, []);

    const deleteTodo = async (id: any) => {
        try {
            await axios.delete(`http://localhost:5001/todos/${id}`);
            setTodos((prevInterns: any) => prevInterns.filter((todo: any) => todo.id !== id));
        } catch (error) {
            console.error('Error deleting intern:', error);
        }
    };

    return (
        <>

            <section className="gradient-custom-2 vh-100">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="d-flex justify-content-center align-items-center">
                        <MDBCol md="12" xl="10">
                            <MDBCard>
                                <MDBCardHeader className="p-3">
                                    <h5 className="mb-0">
                                        <div>
                                            <MDBIcon className="me-2" />
                                            <FontAwesomeIcon icon={faListCheck} className='mx-1' /> Todo List
                                            <Link to="/create" className=" float-end">
                                                <FontAwesomeIcon icon={faPlus} className='mx-1' />
                                            </Link>
                                        </div>

                                    </h5>
                                </MDBCardHeader>
                                <MDBCardBody>

                                    <MDBTable className="mb-0">
                                        <MDBTableHead>
                                            <tr>
                                                <th scope="col">Todo</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </MDBTableHead>
                                        {
                                            todos.map((todo) => (
                                                <MDBTableBody key={todo.id}>
                                                    <tr className="fw-normal">
                                                        <td className="align-middle">
                                                            <span>{todo.name}</span>
                                                        </td>
                                                        <td className="align-middle">
                                                            <h6 className="mb-0">
                                                                <MDBBadge className="mx-2" color={todo.isCompleted ? "success" : "danger"}>
                                                                    {todo.isCompleted ? 'Done' : 'Not Done'}
                                                                </MDBBadge>
                                                            </h6>
                                                        </td>
                                                        <td className="align-middle">
                                                            <MDBTooltip tag="a"
                                                                title="Edit"
                                                            >
                                                                <Link to={`/edit/${todo.id}`}>
                                                                    <MDBIcon

                                                                        color="success"
                                                                        size="lg"
                                                                        className="me-3"
                                                                    />
                                                                    <FontAwesomeIcon icon={faPen} />

                                                                </Link>
                                                            </MDBTooltip>
                                                            <MDBTooltip
                                                                tag="a"

                                                                title="Remove"
                                                            >
                                                                <MDBIcon

                                                                    color="danger"
                                                                    size="lg"
                                                                    className="me-3"

                                                                />
                                                                <FontAwesomeIcon onClick={() => deleteTodo(todo.id)} icon={faTrashCan} />
                                                            </MDBTooltip>
                                                        </td>
                                                    </tr>

                                                </MDBTableBody>
                                            ))}
                                    </MDBTable>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
};

export default ListTodos;
