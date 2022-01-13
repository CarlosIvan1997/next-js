import axios from 'axios'

export const find = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts`
    )
    return data
  } catch (error) {
    return []
  }
}
