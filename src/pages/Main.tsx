import { Announcement } from '../components/Announcement'
import { Categories } from '../components/Categories'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'

export const Main = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
    </div>
  )
}
