import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className={'h-7 w-7 bg-gray-300 rounded-full'}
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="00CCBB" />
      </View>

      <View className="flex-row items-center mx-4 pb-2 space-x-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-300 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keybardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" size={35} />
      </View>

      <ScrollView className="bg-gray-100">
        <Categories />

        <FeaturedRow
          id={'1234'}
          title={'Featured'}
          description={'Paid placements from out partners'}
        />

        <FeaturedRow
          id={'1235'}
          title={'Tasty discounts'}
          description={"Everyone's been enjoying these juicy discounts!"}
        />

        <FeaturedRow
          id={'1236'}
          title={'Offers near you!'}
          description={'Offers bla bla bla...'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
