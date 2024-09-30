import Drawer from "@/Layouts/DrawerLayout";
import { faHouse, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, parseISO } from 'date-fns';

const getStatusStyles = (status) => {
    switch (status) {
        case 'completed':
            return 'bg-green-200 text-green-800';
        case 'pending':
            return 'bg-yellow-200 text-yellow-800';
        case 'in progress':
            return 'bg-blue-200 text-blue-800';
        default:
            return '';
    }
};

function updateStatus() {
}


export default function Orders({orders}) {

    return (
        <>

            <div className='flex h-screen'>
                <Drawer />

                <div>

                </div>

                <div className="overflow-x-auto w-full p-4">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Order RN</th>
                            <th className="py-3 px-6 text-left">TOTAL AMOUNT</th>
                            <th className="py-3 px-6 text-left">Status</th>
                            <th className="py-3 px-6 text-left">Order Created 
                                <button  className="ml-2">
                                    <FontAwesomeIcon icon={faSort} />
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                        {orders.map((order) => {

                            const createdDate = format(parseISO(order.created_at), 'MMMM d, yyyy hh:mm:aa');
                            return(
                                <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{order.order_number}</td>
                                <td className="py-3 px-6">{order.total_amount}</td>
                                <td className="py-3 px-6">
                                    <button onClick={updateStatus}>
                                        <span className={`px-2 py-1 rounded ${getStatusStyles(order.status)}`}>
                                        {order.status}
                                        </span>
                                    </button>
                                   
                                </td>
                                <td className="py-3 px-6">{createdDate.toString()}</td>
                                </tr>
                            );
                                
                            }
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    );
}