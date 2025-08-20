import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

export default function SecondScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* Title */}
      <Text style={styles.pageTitle}>ANIMAL ECONOMIC PARAMETERS</Text>

      {/* Parameter rows */}
      <View style={styles.card}>
        <Row label="Body Condition Score (1–5)" />
        <Row label="Approximate Milk Yield (Peak Lactation) in Ltrs/Day" />
        <Row label="Milk Production Capacity (in Ltrs/Day)" />
        <Row label="Lactation Yield (in Ltrs)" />
        <Row label="Breeding Capacity" />
        <Row label="Market Value (in ₹)" />
        <Row label="Buying Recommendations" isLast />
      </View>

      {/* Table title */}
      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
        BCS Recommendations for Dairy Cows at Different Physiological Stages
      </Text>

      {/* Table */}
      <View style={styles.table}>
        <TableHeader />
        <TableRow stage="Calving Week 0 to 10" days="0 to 10" goal="3.5" min="3.25" max="3.75" />
        <TableRow stage="Early Lactation" days="11 to 100" goal="2.75" min="2.5" max="3.25" />
        <TableRow stage="Mid Lactation" days="101 to 200" goal="3" min="2.75" max="3.25" />
        <TableRow stage="Late Lactation" days="201 to 300" goal="3.25" min="3.25" max="3.75" />
        <TableRow stage="Dry Off" days=">300" goal="3.5" min="3.25" max="3.75" />
        <TableRow stage="Dry" days="-60 to -1" goal="3.5" min="3.25" max="3.75" isLast />
      </View>

      {/* Next Button */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('ThirdScreen')}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

/* --- Reusable Components --- */
function Row({ label, isLast = false }) {
  return (
    <View style={[styles.rowWrap, isLast && { marginBottom: 0 }]}>
      <View style={styles.rowLabel}>
        <Text style={styles.rowLabelText}>{label}</Text>
      </View>
      <View style={styles.rowValue} />
    </View>
  );
}

function TableHeader() {
  return (
    <View style={[styles.tr, styles.thRow]}>
      <Text style={[styles.th, styles.cStage]}>Stage of Lactation</Text>
      <Text style={[styles.th, styles.cDays]}>Days in Milk</Text>
      <Text style={[styles.th, styles.cBcs]}>BCS Goal</Text>
      <Text style={[styles.th, styles.cBcs]}>BCS Min</Text>
      <Text style={[styles.th, styles.cBcs]}>BCS Max</Text>
    </View>
  );
}

function TableRow({ stage, days, goal, min, max, isLast = false }) {
  return (
    <View style={[styles.tr, isLast && styles.trLast]}>
      <Text style={[styles.td, styles.cStage]} numberOfLines={2}>{stage}</Text>
      <Text style={[styles.td, styles.cDays]}>{days}</Text>
      <Text style={[styles.td, styles.cBcs]}>{goal}</Text>
      <Text style={[styles.td, styles.cBcs]}>{min}</Text>
      <Text style={[styles.td, styles.cBcs]}>{max}</Text>
    </View>
  );
}

/* --- Styles --- */
const GREEN = '#149C40';
const BORDER = '#DADADA';

const styles = StyleSheet.create({
  content: { backgroundColor: '#fff', padding: 16 },
  pageTitle: { fontSize: 14, fontWeight: '800', color: '#108234', marginBottom: 12 },

  card: { borderWidth: 1, borderColor: BORDER, borderRadius: 8, overflow: 'hidden' },

  rowWrap: { flexDirection: 'row', alignItems: 'stretch', marginBottom: 10 },
  rowLabel: { flex: 0.9, backgroundColor: GREEN, paddingVertical: 10, paddingHorizontal: 10 },
  rowLabelText: { color: '#fff', fontWeight: '700', fontSize: 12 },
  rowValue: { flex: 1.1, borderWidth: 1, borderColor: BORDER, backgroundColor: '#F8FFF9' },

  sectionTitle: { fontSize: 13, fontWeight: '800', color: '#0F5A2B' },

  table: { marginTop: 10, borderWidth: 1, borderColor: BORDER, borderRadius: 8, overflow: 'hidden' },
  tr: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: BORDER },
  trLast: { borderBottomWidth: 0 },

  thRow: { backgroundColor: GREEN },
  th: { color: '#fff', fontWeight: '800', fontSize: 12, padding: 8, textAlign: 'center' },
  td: { fontSize: 12, color: '#111', padding: 8, textAlign: 'center', borderRightWidth: 1, borderRightColor: BORDER },
  cStage: { flex: 1.6, textAlign: 'left' }, cDays: { flex: 1.0 }, cBcs: { flex: 0.7 },

  button: {
    marginTop: 20,
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});