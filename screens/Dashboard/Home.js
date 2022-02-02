import React from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
    Text
} from 'react-native';

import { FlatList } from "react-native-gesture-handler"
import { IconButton, TextButton } from '../../components';

import { 
    COLORS,
    FONTS,
    SIZES,
    icons,
    images,
    dummyData
} from "../../constants"


const Header = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                marginTop: 40,
                marginBottom: 10,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}
        >
            <View 
                style={{
                    flex: 1
                }}
            >
                <Text
                    style={{
                        ...FONTS.h2
                    }}
                >Hello, Matěj</Text>
                <Text
                    style={{
                        color: COLORS.gray50,
                        ...FONTS.body3
                    }}
                >Thursday, 9th Sept 2021</Text>
            </View>
            <IconButton 
                icon={icons.notification}
                iconStyle={{
                    tintColor: COLORS.black
                }}
            />
        </View>
    )
}
const Home = () => {

    function renderStartLearning() {
        return (
            <ImageBackground
                source={images.featured_bg_image}
                style={{
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 15,
                }}

                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >
                <View>
                    <Text
                        style={{
                            color: COLORS.white,
                            textTransform: 'uppercase',
                            ...FONTS.body2
                        }}
                    >How to</Text>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h2
                        }}
                    >
                        Make your brand more visible with out checklist
                    </Text>
                    <Text
                        style={{
                            marginTop: SIZES.radius,
                            color: COLORS.white,
                            ...FONTS.body4
                        }}
                    >
                        By Scott Harris
                    </Text>
                </View>

                <Image
                    source={images.start_learning}
                    style={{
                        width: "100%",
                        height: 110,
                        marginTop: SIZES.padding
                    }}

                />

            <TextButton 
                label="Start Learning"
                containerStyle={{
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: COLORS.white
                }}
                labelStyle={{
                    color: COLORS.black
                }}
            />


            </ImageBackground>
        )
    }

    function renderCourses() {
        return (
            <FlatList
                horizontal
                data={dummyData.courses_list_1}
                listKey="Courses"
                keyExtractor={item => `Courses-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
                renderItem={({item, index}) => {
                    
                }}
            />
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <Header />

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 150
                }}
                showsHorizontalScrollIndicator={false}
            >
                {renderStartLearning()}

                {renderCourses()}
            </ScrollView>
        </View>
    )
}

export default Home;