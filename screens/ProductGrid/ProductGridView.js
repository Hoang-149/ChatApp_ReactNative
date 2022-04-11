import {
    FlatList,
    SafeAreaView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import GridItem from './GridItem'

function ProductGridView(props) {

    const [products, setproducts] = useState([
        {
            productName: 'Samsung Galaxy A71',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621976497-31hilZICOyL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 9000,
            specification: [
                'Dry clean',
                'Cyclone filter',
                'Convenience cord storage'
            ],
            reviews: 19,
            starts: 5,
        },
        {
            productName: 'APEX Upright Vacuum Cleaner',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639172752-31KdKAHWJGL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 120,
            specification: [
                'Dry clean', 'convenience cord storage'
            ],
            reviews: 10,
            starts: 4.8,
        },
        {
            productName: 'Pet Hair Eraser Turbo Plus Vacuum',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269571-31yo9NB9rDL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 190,
            specification: [
                'convenience cord storage'
            ],
            reviews: 24,
            starts: 4.5,
        },
        {
            productName: 'Complete C3 Vacuum for Soft Carpet',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269774-41S6V9TV2RL._SL500_.jpg?crop=1xw:1xh;center,top&resize=*:100',
            price: 125,
            specification: [
                'Dry clean', 'cyclone filter', 'convenience cord storage'
            ],
            reviews: 11,
            starts: 5,
        },
        {
            productName: 'Jet 90 Stick Cordless Lightweight Vacuum',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639597736-41MkIHj84HL._SL500_.jpg?crop=1xw:1xh;center,top&resize=*:100',
            price: 29,
            specification: [
                'Dry clean', 'cyclone filter', 'convenience cord storage'
            ],
            reviews: 130,
            starts: 4.6,
        },
        {
            productName: 'APEX Upright Vacuum Cleaner',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639172752-31KdKAHWJGL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 90,
            specification: [
                'convenience cord storage'],
            reviews: 30,
            starts: 4,
        },
        {
            productName: 'Pet Hair Eraser Turbo Plus Vacuum',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269571-31yo9NB9rDL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 49,
            specification: [
                'Dry clean', 'cyclone filter', 'convenience cord storage'
            ],
            reviews: 19,
            starts: 5,
        },
        {
            productName: 'Complete C3 Vacuum for Soft Carpet',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269774-41S6V9TV2RL._SL500_.jpg?crop=1xw:1xh;center,top&resize=*:100',
            price: 190,
            specification: [
                'Dry clean', 'cyclone filter', 'convenience cord storage'
            ],
            reviews: 50,
            starts: 4.2,
        },
        {
            productName: 'Samsung Galaxy A71',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621976497-31hilZICOyL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 90,
            specification: [
                'Dry clean', 'cyclone filter', 'convenience cord storage'
            ],
            reviews: 19,
            starts: 5,
        },
        {
            productName: 'APEX Upright Vacuum Cleaner',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639172752-31KdKAHWJGL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 120,
            specification: [
                'Dry clean', 'convenience cord storage'
            ],
            reviews: 10,
            starts: 4.8,
        },
        {
            productName: 'Pet Hair Eraser Turbo Plus Vacuum',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269571-31yo9NB9rDL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 190,
            specification: [
                'convenience cord storage'
            ],
            reviews: 24,
            starts: 4.5,
        },
        {
            productName: 'Complete C3 Vacuum for Soft Carpet',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269774-41S6V9TV2RL._SL500_.jpg?crop=1xw:1xh;center,top&resize=*:100',
            price: 125,
            specification: [
                'Dry clean', 'cyclone filter', 'convenience cord storage'
            ],
            reviews: 11,
            starts: 5,
        },
        {
            productName: 'Jet 90 Stick Cordless Lightweight Vacuum',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639597736-41MkIHj84HL._SL500_.jpg?crop=1xw:1xh;center,top&resize=*:100',
            price: 29,
            specification: [
                'Dry clean', 'cyclone filter', 'convenience cord storage'
            ],
            reviews: 130,
            starts: 4.6,
        },
        {
            productName: 'APEX Upright Vacuum Cleaner',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639172752-31KdKAHWJGL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 90,
            specification: [
                'convenience cord storage'],
            reviews: 30,
            starts: 4,
        },
        {
            productName: 'Pet Hair Eraser Turbo Plus Vacuum',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269571-31yo9NB9rDL._SL500_.jpg?crop=0.667xw:1xh;center,top&resize=*:100',
            price: 49,
            specification: [
                'convenience cord storage'
            ],
            reviews: 19,
            starts: 5,
        },
        {
            productName: 'Complete C3 Vacuum for Soft Carpet',
            url: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647269774-41S6V9TV2RL._SL500_.jpg?crop=1xw:1xh;center,top&resize=*:100',
            price: 190,
            specification: [
                'Dry clean', 'cyclone filter', 'convenience cord storage'
            ],
            reviews: 50,
            starts: 4.2,
        },
    ])

    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: 'white'
    }}>
        <FlatList
            data={products}
            numColumns={2}
            keyExtractor={item => item.productName}
            renderItem={({ item, index }) => <GridItem item={item} index={index} onPress={() => {
                let clonedProduces = products.map(eachProduct => {
                    if (item.productName == eachProduct.productName) {
                        return { ...eachProduct, isSaved: eachProduct.isSaved == false || eachProduct.isSaved == undefined ? true : false }
                    }
                    return eachProduct
                })
                setproducts(clonedProduces)
            }} />}
        />
    </SafeAreaView>
}

export default ProductGridView