import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CarouselStyle from './CarouselStyle';

export default function Carousel() 
{

    const flatlistRef= useRef();

    //Get Dimensions
    const screenWidth=Dimensions.get("window").width;
    const[activeIndex,setActiveIndex] = useState(0);

    

    //Auto Scroll

    
     
   // if activeIndex === last index --> jump back to the first index
   //else activeIndex +1
   
  useEffect(()=>{
   let interval=setInterval(()=>{
    if(activeIndex=== carouselData.length-1){
        flatlistRef.current.scrollToIndex({
            index: 0,
            animation:true
        });
    }
        else{
            flatlistRef.current.scrollToIndex({
                index: activeIndex+1,
                animation: true,
            });
        }
    }, 2000);

    return ()=>clearInterval(interval);
   });

   const getItemLayout =(data,index)=>(
    {
        length:screenWidth,
        offset: screenWidth*index,
        index:index
    }
   )
    
    //Data for carousel
    const carouselData=[
    {
       id:"01",
       image: require("../Asset/pic1.jpg"),
    },
    {
        id:"02",
        image: require("../Asset/pic2.jpg"),
    },
    {
        id:"03",
       image: require("../Asset/pic3.jpg"),
    },
    ];

  // Display Images // UI
  const renderItem= ({item, index}) => {
    return(
        <View>
            <Image source={item.image} style={{height:200,width: screenWidth}}/>


        </View>
    )
  };

  const handleScroll = (event) => {
      // get the scroll position
      const scrollPosition=event.nativeEvent.contentOffset.x;
      // get the index of current active item


      const index=scrollPosition/ screenWidth;

      //update the index
    
      setActiveIndex(index);
      
  };

  //Render Dot Indicators
  const renderDotIndicators = () => {

    return carouselData.map((dot,index)=>{
        //if the active index === index
        
        if(activeIndex===index){
            return(
                <View style={CarouselStyle.image}></View>
            )
        }
        else{
            return (<View 
                key={index}
                style={CarouselStyle.img}
                ></View>);
        }
      
    });
  };

  return (
    <View>
      <Text >Carousel</Text>
      <FlatList
       data={carouselData} 
       ref={flatlistRef}
       getItemLayout={getItemLayout}
       renderItem={renderItem} 
       keyExtractor={(item)=>item.id}
       horizontal={true} 
       pagingEnabled={true}
       onScroll={handleScroll}
        />
       <View style={CarouselStyle.renderDotIndicators}>{renderDotIndicators()}</View>
        
     
    </View>
  )
}