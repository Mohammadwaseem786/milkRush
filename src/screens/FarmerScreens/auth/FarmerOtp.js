// src/screens/FarmerOTP/FarmerOTPTitle.js
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

function onEdit(navigation) {
  navigation.goBack(); // go back to FarmerLogin
}

const FarmerOtp = ({ route, navigation }) => {
  const phoneNumber = route?.params?.phone || "9740995429";

  // OTP state
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  // Error state
  const [error, setError] = useState("");

  // Resend timer
  const [countdown, setCountdown] = useState(0);     // seconds remaining
  const counting = countdown > 0;

  useEffect(() => {
    if (!counting) return;
    const id = setInterval(() => {
      setCountdown((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, [counting]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (error) setError(""); // clear error when user types

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const allFilled = otp.every((d) => d && d.length === 1);

  const handleContinue = () => {
    if (!allFilled) return;
    const code = otp.join("");

    // Hardcoded valid OTPs
    if (code === "1234" || code === "2345") {
      setError("");
      navigation.navigate("FarmerStack");
    } else {
      setError("Wrong OTP, please try again");
    }
  };

  const handleResend = () => {
  // TODO: trigger resend OTP API
  setOtp(["", "", "", ""]);   // 👈 clear OTP inputs
  setCountdown(30);           // start 30s timer
  setError("");               // also clear any error
  if (inputs.current[0]) {
    inputs.current[0].focus(); // optional: focus first box again
  }
};


  const mmss = `00:${String(countdown).padStart(2, "0")}`;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.otpTitle}>Enter OTP</Text>

        <Text style={styles.subtitle}>
          Please enter the OTP code sent on your mobile number{" "}
          <Text style={styles.phone}>{phoneNumber}</Text>{" "}
          <Text style={styles.edit} onPress={() => onEdit(navigation)}>
            Edit
          </Text>
        </Text>

        {/* OTP input boxes */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={[styles.otpBox, !!error && styles.otpBoxError]}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onFocus={() => error && setError("")}   // clear error on focus
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        {/* Continue button */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleContinue}
          disabled={!allFilled}
          style={[styles.button, { opacity: allFilled ? 1 : 0.5 }]}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* Error message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Resend section */}
        {counting ? (
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Send code again in</Text>
            <Text style={styles.timerText}>{mmss}</Text>
          </View>
        ) : (
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn’t receive OTP?</Text>
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendButton}>Resend</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FarmerOtp;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  container: { flex: 1 },
  otpTitle: {
    fontFamily: "NotoSans-Bold",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 26,
    color: "#000000",
    marginLeft: 28,
    marginTop: 50,
  },
  subtitle: {
    fontFamily: "NotoSans-Regular",
    fontSize: 14.9,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(0,0,0,0.7)",
    marginLeft: 28,
    marginTop: 12,
    width: 319,
  },
  phone: {
    fontFamily: "NotoSans-SemiBold",
    fontWeight: "700",
  },
  edit: {
    fontFamily: "NotoSans-Regular",
    fontSize: 17,
    fontWeight: "700",
    color: "#1982C5",
    textDecorationLine: "underline",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 45,
  },
  otpBox: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 14,
    fontSize: 20,
    color: "#000000",
  },
  otpBoxError: {
    borderColor: "#C62424", // red border on error
  },

  /* Continue button */
  button: {
    width: 335,
    height: 56,
    backgroundColor: "#308ECB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 27,
    marginTop: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "NotoSans",
    fontSize: 20,
    fontWeight: "690",
  },

  /* Error text (below button, above resend) */
  errorText: {
    marginTop: 12,
    alignSelf: "center",
    fontFamily: "NotoSans",
    fontSize: 15.5,
    lineHeight: 18,
    color: "#C62424",
    fontWeight: "600",
  },

  /* Resend / Timer row */
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    marginLeft: -3,
  },
  resendText: {
    fontFamily: "NotoSans-Regular",
    fontSize: 18,
    letterSpacing: 0.2,
    color: "rgba(0,0,0,0.7)",
    marginRight: 6,
  },
  resendButton: {
    fontFamily: "NotoSans-SemiBold",
    fontSize: 16,
    letterSpacing: 0.2,
    color: "#308ECB",
    paddingHorizontal: 18,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#308ECB",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  timerText: {
    fontFamily: "NotoSans-Bold",
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 0.2,
    color: "#308ECB",
    marginLeft: 2,
    includeFontPadding: true,
    textAlignVertical: "baseline",
  },
});
