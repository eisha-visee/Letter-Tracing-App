import { LanguageCard } from '@/components/LanguageCard';
import { colors } from '@/constants/colors';
import { languages } from '@/constants/languageData';
import { useApp } from '@/contexts/AppContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const { setSelectedLanguage } = useApp();

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
    router.push('/(tabs)/letters');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Let's Write!</Text>
          <Pressable style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </Pressable>
        </View>

        {/* Mascot */}
        <View style={styles.mascotContainer}>
          <Image
            source={require('@/assets/images/app-logo.png')}
            style={styles.mascotImage}
            resizeMode="contain"
          />
        </View>

        {/* Instruction */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instruction}>
            Choose Your{'\n'}
            <Text style={styles.instructionHighlight}>Language!</Text>
          </Text>
        </View>

        {/* Language Cards */}
        <View style={styles.cardsContainer}>
          {languages.map((language) => (
            <LanguageCard
              key={language.id}
              icon={language.icon}
              name={language.name}
              nativeName={language.nativeName}
              subtitle={language.subtitle}
              onPress={() => handleLanguageSelect(language.id)}
            />
          ))}
        </View>

        {/* Sound Button */}
        <View style={styles.soundButtonContainer}>
          <Pressable style={styles.soundButton}>
            <Text style={styles.soundIcon}>🔊</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgDark,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.white,
  },
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    fontSize: 24,
  },
  mascotContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  mascotImage: {
    width: 280,
    height: 200,
  },
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  instruction: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    lineHeight: 36,
  },
  instructionHighlight: {
    color: colors.vibrantGreen,
    fontSize: 32,
  },
  cardsContainer: {
    marginBottom: 20,
  },
  soundButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  soundButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.vibrantGreen,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  soundIcon: {
    fontSize: 28,
  },
});
