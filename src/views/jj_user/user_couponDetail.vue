<template> 
  <el-card class="form-container" shadow="never">
    <el-form :model="member"
             :rules="rules"
             ref="couponFrom"
             label-width="150px"
             size="small">
      <el-form-item label="姓名：" prop="name">
        <el-input v-model="member.name" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="性别：">
        <el-select v-model="member.sex">
          <el-option
            v-for="item in platformOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="证件号：" prop="cardId">
        <el-input v-model.number="member.cardId" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="手机号：" prop="phone">
        <el-input v-model.number="member.phone" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="微信号：" prop="weixin">
        <el-input v-model.number="member.weixin" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="支付宝：" prop="zfb">
        <el-input v-model.number="member.zfb" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="银行名称：" prop="bankName">
        <el-input v-model.number="member.bankName" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="支行：" prop="bankSub">
        <el-input v-model.number="member.bankSub" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="银行卡：" prop="bankId">
        <el-input v-model.number="member.bankId" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="期货公司：" prop="futuresComp">
        <el-input v-model.number="member.futuresComp" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="期货账号：" prop="futuresId">
        <el-input v-model.number="member.futuresId" placeholder="只能输入正整数" class="input-width"></el-input>
      </el-form-item>
      <el-form-item label="生日：">
        <el-date-picker type="date" placeholder="选择日期" v-model="member.birthDate" style="width: 150px"></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('couponFrom')">提交</el-button>
        <el-button v-if="!isEdit" @click="resetForm('couponFrom')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>

  import {getUmsUser, saveMemberInfo} from '@/api/jj_user';

  const defaultPlatformOptions = [{label: '男', value: 1}, {label: '女', value: 2}];
  export default {
    name: 'CouponDetail',
    props: {
      isEdit: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        member: {},
        platformOptions: Object.assign({}, defaultPlatformOptions),
        rules: {
          name: [
            {required: true, message: '请输入优惠券名称', trigger: 'blur'},
            {min: 2, max: 140, message: '长度在 2 到 140 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    created(){
      if (this.isEdit) {
        getUmsUser(this.$route.query.id).then(response => {
          this.member = response.result;
        });
      }
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$confirm('是否提交数据', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              if (this.isEdit) {
                saveMemberInfo(this.member).then(response => {
                  this.$refs[formName].resetFields();
                  this.$message({
                    message: '修改成功',
                    type: 'success',
                    duration: 1000
                  });
                  this.$router.back();
                });
              } else {
               /* createCoupon(this.coupon).then(response => {
                  this.$refs[formName].resetFields();
                  this.$message({
                    message: '提交成功',
                    type: 'success',
                    duration: 1000
                  });
                  this.$router.back();
                });*/
              }
            });
          } else {
            this.$message({
              message: '验证失败',
              type: 'error',
              duration: 1000
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.coupon = Object.assign({}, defaultCoupon);
      },

    }
  }
</script>
<style scoped>
  .input-width {
    width: 60%;
  }
</style>


