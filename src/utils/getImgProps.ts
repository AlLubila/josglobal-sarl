export function getImgProps(src: string | null) {
    if (!src) {
      return {
        src: '/default-image.png', // Path to your default image
        width: 300,
        height: 300,
      };
    }
  
    return {
      src,
      width: 300, // Use appropriate width
      height: 300, // Use appropriate height
    };
  }