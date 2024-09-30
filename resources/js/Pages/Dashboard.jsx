import PrimaryButton from '@/Components/PrimaryButton';
import Drawer from '@/Layouts/DrawerLayout';
import { Head } from '@inertiajs/react';


export default function Dashboard({products}) {
    return (
        <>
            <div className='flex h-screen'>
            <Drawer />

                <Head title="Dashboard" />
                
                <div className='w-full p-4'>
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

                    <div className='mb-4 flex-col p-6 bg-gray-100'>
                        {/* CRUD BUTTONS */}
                        <PrimaryButton className="mr-4">
                            CREATE
                        </PrimaryButton>

                        <PrimaryButton className="mr-4">
                            READ
                        </PrimaryButton>

                        <PrimaryButton className="mr-4">
                            UPDATE
                        </PrimaryButton>

                        <PrimaryButton className="mr-4">
                            DELETE
                        </PrimaryButton>
                       

                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Product Name</th>
                                <th className="py-3 px-6 text-left">Description</th>
                                <th className="py-3 px-6 text-left">Price</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                            {products.map((product) => (
                                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{product.title}</td>
                                <td className="py-3 px-6">{product.description}</td>
                                <td className="py-3 px-6">{product.price}</td>
                        
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                
            </div>
            
        </>
        
    );
}
