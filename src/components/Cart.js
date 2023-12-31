import {Table} from 'react-bootstrap'
import  '../Cart.css';
import { useSelector } from 'react-redux';

function Cart() {
    let state = useSelector((state)=> state)
    console.log(state.cart[0].name)
  
    return (
        <div className='cart-top-area'>
            <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    state.cart.map((a, i) => (
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td>
                                <button>+</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table> 
        </div>
    )
    
}

export default Cart;