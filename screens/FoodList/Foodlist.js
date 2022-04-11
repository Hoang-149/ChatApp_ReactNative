import {
    Text,
    View,
    Image,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    ScrollView,
    FlatList,
    SafeAreaView
} from 'react-native'
import { images, colors, icons, fontSizes } from '../../constants'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValiEmail, isValiPassword } from '../../utilies/Validations'
import FoodItem from './FoodItem'

/*
    - ListView from a map of objects
    - FlatList
*/
function FoodList(props) {

    // list of food = state
    const [foods, setfoods] = useState([
        {
            name: 'Paella Valenciana, with rabiit ',
            url: 'https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes.jpg',
            status: 'Opening soon',
            price: 5224.56,
            website: 'https://edition.cnn.com',
            socialNetwork: {
                facebook: 'https://www.facebook.com',
                twitter: 'https://twitter.com',
                instagram: 'https://instagram.com',
            }
        },
        {
            name: 'Gazpacho',
            url: 'https://www.englishclub.com/images/vocabulary/food/italian/italian-food-640.jpg',
            status: 'Opening Now',
            price: 1234.56,
            website: 'https://edition.cnn.com',
            socialNetwork: {
                twitter: 'https://twitter.com',
                instagram: 'https://instagram.com',
            }

        },
        {
            name: 'Pimientos de London',
            url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/spaghetti-meatballs.jpg',
            status: 'Closing soon',
            price: 8912.56,
            website: 'https://edition.cnn.com',
            socialNetwork: {
                instagram: 'https://instagram.com',
            }

        },
        {
            name: 'Pimientos de Padron',
            url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/spaghetti-meatballs.jpg',
            status: 'Closing soon',
            price: 8912.56,
            website: 'https://edition.cnn.com',
            socialNetwork: {
                instagram: 'https://instagram.com',
            }

        },
        {
            name: 'Pimientos de Pari',
            url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/spaghetti-meatballs.jpg',
            status: 'Closing soon',
            price: 8912.56,
            website: 'https://edition.cnn.com',
            socialNetwork: {
                instagram: 'https://instagram.com',
            }

        },
        {
            name: 'Albondigas',
            url: 'https://www.englishclub.com/images/vocabulary/food/italian/italian-food-640.jpg',
            status: 'Coming soon',
            price: 145.56,
            website: 'https://edition.cnn.com',
            socialNetwork: {
                facebook: 'https://www.facebook.com',
            }

        },
        {
            name: 'Ahahahaha',
            url: 'https://www.englishclub.com/images/vocabulary/food/italian/italian-food-640.jpg',
            status: 'Coming soon',
            price: 145.56,
            website: 'https://edition.cnn.com',
            socialNetwork: {
                facebook: 'https://www.facebook.com',
            }

        },
        {
            name: 'Spagheti',
            url: 'https://www.englishclub.com/images/vocabulary/food/italian/italian-food-640.jpg',
            status: 'Closing soon',
            price: 145.56,
            website: 'https://edition.cnn.com',
            socialNetwork: {
                facebook: 'https://www.facebook.com',
            }

        },
    ])

    const [categories, setcategories] = useState([
        {
            name: 'BBQ',
            url: 'https://www.hoteljob.vn/uploads/images/18-06-08-16/BBQ-la-gi-01.png'
        },
        {
            name: 'Breakfast',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Breakfast_Platter.jpg/1200px-Breakfast_Platter.jpg'
        },
        {
            name: 'Coffee',
            url: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg'
        },
        {
            name: 'Noodles',
            url: 'https://freedesignfile.com/upload/2017/01/Seafood-Soba-noodles-HD-picture-07.jpg'
        },
        {
            name: 'Hotdog',
            url: 'https://cdn.kiwilimon.com/recetaimagen/239/th5-640x640-2681.jpg'
        },
        {
            name: 'Cake',
            url: 'https://www.seriouseats.com/thmb/p1UTiC0PEeji0tXB-xvxcYc5j_A=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__11__BakedOccasions_BirthdayCake-02af7038d93647d9a7339f0802b03079.jpg'
        },
        {
            name: 'Barbecue',
            url: 'https://i.ndtvimg.com/i/2016-12/barbecue_620x350_51480822148.jpg'
        },
        {
            name: 'Candy',
            url: 'https://st3.depositphotos.com/32153748/37740/i/600/depositphotos_377407128-stock-photo-one-bright-multi-colored-candy.jpg'
        },
        {
            name: 'Barbecue',
            url: 'https://www.cleanipedia.com/images/5iwkm8ckyw6v/7wUuTXSZ7ZMoJthcPzSw5C/411564f40e891bfb584aa9daf7815669/MjAyMDA1MDZfMTY1MTQ4XzM2MTk4MF9Tb2NvbGFfZGVuXzIubWF4LTgwMHg4MDAuanBn/800w-533h/%C4%83n-socola-gi%C3%BAp-gi%E1%BA%A3m-stress.jpg'
        },
        {
            name: 'Pizza',
            url: 'http://doanngon.net/wp-content/uploads/2022/01/pizza.jpg'
        },
    ])

    const [searchText, setsearchText] = useState('')

    const filteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()))

    return <SafeAreaView style={{
        backgroundColor: 'white',
    }}>
        <View>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Icon
                    name="search"
                    size={18}
                    style={{
                        position: 'absolute',
                        top: 8,
                        left: 6,
                    }}
                    color={'black'} />
                <TextInput
                    autoCorrect={false}
                    onChangeText={(text) => {
                        setsearchText(text)
                    }}
                    style={{
                        backgroundColor: colors.inactive,
                        height: 36,
                        flex: 1,
                        marginEnd: 5,
                        borderRadius: 5,
                        opacity: 0.4,
                        paddingStart: 30,
                        color: 'black'
                    }} />
                <Icon name="bars" size={30} color={'black'} />
            </View>
            <View style={{
                height: 100
            }}>
                <View style={{ height: 1, backgroundColor: colors.inactive }} />
                <FlatList
                    horizontal={true}
                    data={categories}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => {
                        return <TouchableOpacity
                            onPress={() => {
                                alert(`press ${item.name}`);
                            }}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 8
                            }}>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: 'cover',
                                    borderRadius: 25,

                                }}
                                source={{
                                    uri: item.url,
                                }} />
                            <Text style={{ color: 'black' }}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                    style={{ flex: 1, }}>

                </FlatList>
                <View style={{ height: 1, backgroundColor: colors.inactive }} />

            </View>
            {/* <ScrollView>
                {foods.map(eachFood => <FoodItem food = {eachFood} key={eachFood.name}/>)}

            </ScrollView> */}
        </View>

        {filteredFoods().length > 0 ? <FlatList
            data={filteredFoods()}
            renderItem={({ item }) => <FoodItem
                onPress={() => {
                    alert(`You press item's name: ${item.name}`)
                }}
                food={item} key={item.name} />}
            keyExtractor={eachFood => eachFood.name}
        /> : <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{
                color: 'black',
                fontSize: fontSizes.h3
            }}>No food found</Text>
        </View>}
    </SafeAreaView>
}

export default FoodList