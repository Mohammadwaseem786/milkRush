import { 
  useFonts, 
  NotoSans_400Regular, 
  NotoSans_500Medium 
} from '@expo-google-fonts/noto-sans';

import { 
  EBGaramond_400Regular, 
  EBGaramond_600SemiBold,
} from '@expo-google-fonts/eb-garamond';

export default function FontLoaderhook() {
  const [fontsLoaded] = useFonts({
    NotoSans_400Regular,
    NotoSans_500Medium,
    EBGaramond_400Regular,
    EBGaramond_600SemiBold, // 👈 use this for headers
  });

  return fontsLoaded;
}
