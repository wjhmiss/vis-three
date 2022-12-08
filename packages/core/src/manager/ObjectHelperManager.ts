import { Material, Mesh, Object3D } from "three";
import { EventDispatcher } from "../core/EventDispatcher";
import { CameraHelper } from "../extends/helper/camera/CameraHelper";
import { DirectionalLightHelper } from "../extends/helper/light/DirectionalLightHelper";
import { PointLightHelper } from "../extends/helper/light/PointLightHelper";
import { RectAreaLightHelper } from "../extends/helper/light/RectAreaLightHelper";
import { SpotLightHelper } from "../extends/helper/light/SpotLightHelper";
import { CSS2DPlaneHelper } from "../extends/helper/object/CSS2DPlaneHelper";
import { CSS3DObjectHelper } from "../extends/helper/object/CSS3DObjectHelper";
import { CSS3DPlaneHelper } from "../extends/helper/object/CSS3DPlaneHelper";
import { CSS3DSpriteHelper } from "../extends/helper/object/CSS3DSpriteHelper";
import { GroupHelper } from "../extends/helper/object/GroupHelper";
import { LineHelper } from "../extends/helper/object/LineHelper";
import { MeshHelper } from "../extends/helper/object/MeshHelper";
import { PointsHelper } from "../extends/helper/object/PointsHelper";
import { SpriteHelper } from "../extends/helper/object/SpriteHelper";
import { CONFIGTYPE } from "../middleware/constants/configType";

export interface ObjectHelperManagerParameters {
  helperGenerator?: { [key: string]: typeof Object3D };
  helperFilter?: { [key: string]: boolean };
  objectFilter?: Object3D[];
}

export class ObjectHelperManager extends EventDispatcher {
  private helperGenerator = {
    [CONFIGTYPE.POINTLIGHT]: PointLightHelper,
    [CONFIGTYPE.SPOTLIGHT]: SpotLightHelper,
    [CONFIGTYPE.DIRECTIONALLIGHT]: DirectionalLightHelper,
    [CONFIGTYPE.RECTAREALIGHT]: RectAreaLightHelper,
    [CONFIGTYPE.PERSPECTIVECAMERA]: CameraHelper,
    [CONFIGTYPE.ORTHOGRAPHICCAMERA]: CameraHelper,
    [CONFIGTYPE.MESH]: MeshHelper,
    [CONFIGTYPE.GROUP]: GroupHelper,
    [CONFIGTYPE.SPRITE]: SpriteHelper,
    [CONFIGTYPE.POINTS]: PointsHelper,
    [CONFIGTYPE.LINE]: LineHelper,
    [CONFIGTYPE.CSS3DOBJECT]: CSS3DObjectHelper,
    [CONFIGTYPE.CSS3DPLANE]: CSS3DPlaneHelper,
    [CONFIGTYPE.CSS3DSPRITE]: CSS3DSpriteHelper,
    [CONFIGTYPE.CSS2DPLANE]: CSS2DPlaneHelper,
  };

  private helperFilter = {
    AmbientLight: true,
    HemisphereLight: true,
    Object3D: true,
    TransformControls: true,
    Scene: true,
  };

  private objectFilter = new Set<Object3D>();

  objectHelperMap = new Map<Object3D, Object3D>();

  constructor(params: ObjectHelperManagerParameters = {}) {
    super();

    params.helperGenerator &&
      (this.helperGenerator = Object.assign(
        this.helperGenerator,
        params.helperGenerator
      ));

    params.helperFilter &&
      (this.helperFilter = Object.assign(
        this.helperFilter,
        params.helperFilter
      ));

    params.objectFilter &&
      (this.objectFilter = new Set(
        params.objectFilter.concat(Array.from(this.objectFilter))
      ));
  }

  /**
   * @description: 添加过滤的物体
   * @param {Object3D} objects three object
   * @return {this} this
   */
  addFilteredObject(...objects: Object3D[]): this {
    for (const object of objects) {
      this.objectFilter.add(object);
    }

    return this;
  }

  /**
   * @description:添加物体辅助
   * @param {Object3D} obejct three object
   * @return {Object3D | null} three object or null
   */
  addObjectHelper(object: Object3D): Object3D | null {
    if (
      this.objectFilter.has(object) ||
      this.objectHelperMap.has(object) ||
      this.helperFilter[object.type] ||
      object.type.toLocaleLowerCase().includes("helper")
    ) {
      return null;
    }

    if (!this.helperGenerator[object.type]) {
      console.warn(
        `object helper can not support this type object: '${object.type}'`
      );
      return null;
    }

    const helper = new this.helperGenerator[object.type](object);
    this.objectHelperMap.set(object, helper);

    return helper;
  }

  /**
   * @description: 销毁物体辅助
   * @param {Object3D} object three object
   * @return {*} three object or null
   */
  disposeObjectHelper(object: Object3D): Object3D | null {
    if (
      this.objectFilter.has(object) ||
      this.helperFilter[object.type] ||
      object.type.toLocaleLowerCase().includes("helper")
    ) {
      return null;
    }

    if (!this.objectHelperMap.has(object)) {
      console.warn(
        `object helper manager can not found this object\`s helper: `,
        object
      );
      return null;
    }

    const helper = this.objectHelperMap.get(object)! as Mesh;

    helper.geometry && helper.geometry.dispose();

    if (helper.material) {
      if (helper.material instanceof Material) {
        helper.material.dispose();
      } else {
        helper.material.forEach((material) => {
          material.dispose();
        });
      }
    }

    this.objectHelperMap.delete(object);

    return helper;
  }
}