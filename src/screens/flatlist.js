import { View, Text,StyleSheet,FlatList,TouchableOpacity,Image } from 'react-native'
import React,{Component} from 'react'
import dp from '../BottomNavigator/dp.png'


class Refe extends Component{
  
  state={
    data:[{
        id:1,
        name: 'Aditya Sagel  (Age 29)',
        disease:"Heart Failure",
        admitdate :"22-Feb-2022",
    },
    {
      id:2,
      name: 'Aditi Tambhi  (Age 45)',
      disease:"Bone Marrow Transplant",
      admitdate :"23-Feb-2022",
  },
  {
    id:3,
    name: 'Priya Saini   (Age 25)',
    disease:"PCOD",
    admitdate :"23-Feb-2022",
},{
  id:4,
  name: 'Manvendra Singh  (Age 29)',
  disease:"Mental Disorder",
  admitdate :"22-Feb-2022",
},
{
id:5,
name: 'Vinay Sharma  (Age 45)',
disease:"Growin issue",
admitdate :"23-Feb-2022",
},
{
id:6,
name: 'Chaya Singh  (Age 25)',
disease:"PCOD",
admitdate :"23-Feb-2022",
},
]
}
  renderItem = ({item})=>{
    return(
      <View style={styles.flatList}>
        <View style = {{ flexDirection:"column"}}>
        <Text style={styles.Text1}>{item.name}</Text>
        <Text style={styles.Text2}>{item.disease}</Text>
        <Text style={styles.Text3}>Admit date :{item.admitdate}</Text>
        <TouchableOpacity>
          <Image style={styles.image50} source={dp} />
          </TouchableOpacity>
          <View style = {styles.delete} >
        <TouchableOpacity>
        <Text style={styles.Textdelete}>REFER</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>        
    )
  }
render() {
    const {data} = this.state
    return (
      <View>
        <Text style={styles.re}>Refer</Text>
      <View style={styles.container}>
        <FlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(item)=> item.id}
        />
      </View>
      </View>  
    );
    };
  }
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"white",
  padding:24,
  },
image50:{
 position: "absolute",
  width: 30,
  height: 30,
  left: 270, 
  bottom:30,
  },
Text1:{
color:"#00007A",
fontStyle: "normal",
fontWeight: "400",
bottom:10,
fontSize: 15,
lineHeight: 22,
},
Text2:{
color:"#171726",
fontSize:13,
fontStyle: "normal",
fontWeight: "500",
lineHeight: 20,
bottom:4,
},
Text3:{
color:"#171726",
fontSize:13,
fontStyle: "normal",
fontWeight: "500",
lineHeight: 20,
top:2
},
flatList:{
flexDirection:"row",
justifyContent:"flex-start",
alignItems:"center",
backgroundColor:"white",
marginBottom:16,
padding:8,
borderRadius:2,
elevation:1,
width:311,
height:100,
},
delete:{
left:240,
borderRadius:5,
backgroundColor:"blue",
width:60,
height:25,
bottom:8,
},
Textdelete:{
color:"#00007A",
fontStyle: "normal",
fontWeight: "500",
textAlign:"center",
color:"white",
fontSize: 13,
lineHeight: 22,
},
});
export default Refe
