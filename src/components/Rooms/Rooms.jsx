import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from '../Shared/Container'
import Card from './Card';
import Loader from '../Shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';
const Rooms = ({}) => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('./rooms.json')
        .then(res => res.json())
        .then(data => {
            if(category){
                const filtered = data.filter(room => room.category == category);
                setRooms(filtered);
            }
            else{
                setRooms(data);
            }
            setLoading(false);
        })
        .catch(err => console.log(err))
    }, [category])
    // console.log(rooms);
   

    if (loading) {
        return <Loader/>
      }
    return (
        <div>
            <Container>
                <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                {
                    rooms && rooms.length > 0 ?
                        rooms.map((room, index) => <Card key={index} room={room} />)
                        : 
                        <div className='pt-12'>
                        <Heading 
                        title="No room available in this category"
                        subtitle="Please select other categories"
                        center={true}
                         />
                    </div>
                }
                </div>
            </Container>
        </div>
    );
};

export default Rooms;