
<script>
import ComDaren from './ComDaren'
export default {
    data() {
        return {
            options: {
                title: '达人',
                route1: '/more',
                img1: 'rmdr',
                route2: 'darenxq',
                img2: 'drtj',
                message: '海南7日5晚自由行·【立减888含黄金周！】直飞 3+2双酒店DIY',
                className: [
                    'photo',
                    ''
                ],
                imgArr: ['17380965_999592.jpg', '2017-03-19_113441.png']
            }
        }
    },
    render(){
         <ComDaren options={options}/>
    }
}
</script>
